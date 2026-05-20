import { RequestType } from './enums';

type ModelField = {
  name: string;
  type: string;
  description: string;
};

type OptionalAttribute = {
  name: string;
  type: string;
  description: string;
};

export type ApiActionDoc = {
  key: string;
  slug: string;
  title: string;
  description: string;
  method: RequestType;
  endpoint: string;
  model: ModelField[];
  optionalAttributes?: OptionalAttribute[];
  curl: string;
  js: string;
  response: unknown;
};

export type ResourceDoc = {
  key: string;
  title: string;
  actions: ApiActionDoc[];
};

const buildCrudActions = (resource: {
  key: string;
  title: string;
  singular: string;
  model: ModelField[];
  createPayload: Record<string, unknown>;
  updatePayload: Record<string, unknown>;
  sampleEntity: Record<string, unknown>;
}) => {
  const endpointBase = `/v1/${resource.key}`;
  const id = `${resource.singular}_xyz123`;
  const entityPath = `${endpointBase}/${id}`;

  return [
    {
      key: 'list',
      slug: 'list',
      title: `List ${resource.title}`,
      description: `Retrieve a paginated list of ${resource.key}.`,
      method: RequestType.GET,
      endpoint: endpointBase,
      optionalAttributes: [
        {
          name: 'limit',
          type: 'integer',
          description: `Limit the number of ${resource.key} returned.`,
        },
      ],
      model: resource.model,
      curl: `curl -G https://api.vembric.chat${endpointBase} \\
  -H "Authorization: Bearer {token}" \\
  -d limit=10`,
      js: `await fetch("https://api.vembric.chat${endpointBase}?limit=10", {
  headers: {
    Authorization: "Bearer {token}",
  },
});`,
      response: {
        has_more: false,
        data: [resource.sampleEntity],
      },
    },
    {
      key: 'create',
      slug: 'create',
      title: `Create ${resource.singular}`,
      description: `Create a new ${resource.singular} by sending the required fields.`,
      method: RequestType.POST,
      endpoint: endpointBase,
      model: resource.model.filter((f) => f.name !== 'id'),
      curl: `curl -X POST https://api.vembric.chat${endpointBase} \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(resource.createPayload, null, 4)}'`,
      js: `await fetch("https://api.vembric.chat${endpointBase}", {
  method: "POST",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(${JSON.stringify(resource.createPayload, null, 2)}),
});`,
      response: resource.sampleEntity,
    },
    {
      key: 'edit',
      slug: 'edit',
      title: `Edit ${resource.singular}`,
      description: `Partially update properties of an existing ${resource.singular}.`,
      method: RequestType.PATCH,
      endpoint: `${endpointBase}/:id`,
      model: [
        {
          name: 'id',
          type: 'string (path param)',
          description: `ID of the ${resource.singular} to edit.`,
        },
        ...resource.model.filter((f) => f.name !== 'id'),
      ],
      curl: `curl -X PATCH https://api.vembric.chat${entityPath} \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(resource.updatePayload, null, 4)}'`,
      js: `await fetch("https://api.vembric.chat${entityPath}", {
  method: "PATCH",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(${JSON.stringify(resource.updatePayload, null, 2)}),
});`,
      response: {
        ...resource.sampleEntity,
        ...resource.updatePayload,
      },
    },
    {
      key: 'update',
      slug: 'update',
      title: `Update ${resource.singular}`,
      description: `Replace or fully update an existing ${resource.singular}.`,
      method: RequestType.PUT,
      endpoint: `${endpointBase}/:id`,
      model: [
        {
          name: 'id',
          type: 'string (path param)',
          description: `ID of the ${resource.singular} to update.`,
        },
        ...resource.model.filter((f) => f.name !== 'id'),
      ],
      curl: `curl -X PUT https://api.vembric.chat${entityPath} \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(resource.sampleEntity, null, 4)}'`,
      js: `await fetch("https://api.vembric.chat${entityPath}", {
  method: "PUT",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(${JSON.stringify(resource.sampleEntity, null, 2)}),
});`,
      response: resource.sampleEntity,
    },
    {
      key: 'view',
      slug: 'view',
      title: `View ${resource.singular}`,
      description: `Retrieve details for a specific ${resource.singular}.`,
      method: RequestType.GET,
      endpoint: `${endpointBase}/:id`,
      model: [
        {
          name: 'id',
          type: 'string (path param)',
          description: `ID of the ${resource.singular} to retrieve.`,
        },
      ],
      curl: `curl -X GET https://api.vembric.chat${entityPath} \\
  -H "Authorization: Bearer {token}"`,
      js: `await fetch("https://api.vembric.chat${entityPath}", {
  headers: {
    Authorization: "Bearer {token}",
  },
});`,
      response: resource.sampleEntity,
    },
    {
      key: 'delete',
      slug: 'delete',
      title: `Delete ${resource.singular}`,
      description: `Delete an existing ${resource.singular} by ID.`,
      method: RequestType.DELETE,
      endpoint: `${endpointBase}/:id`,
      model: [
        {
          name: 'id',
          type: 'string (path param)',
          description: `ID of the ${resource.singular} to delete.`,
        },
      ],
      curl: `curl -X DELETE https://api.vembric.chat${entityPath} \\
  -H "Authorization: Bearer {token}"`,
      js: `await fetch("https://api.vembric.chat${entityPath}", {
  method: "DELETE",
  headers: {
    Authorization: "Bearer {token}",
  },
});`,
      response: {
        id,
        deleted: true,
      },
    },
  ] as ApiActionDoc[];
};

const gameModel: ModelField[] = [
  { name: 'id', type: 'string', description: 'Unique identifier for the game.' },
  { name: 'name', type: 'string', description: 'Name of the game.' },
  { name: 'genre', type: 'string', description: 'Genre of the game.' },
  { name: 'release_date', type: 'string', description: 'Release date in ISO format.' },
  { name: 'developer', type: 'string', description: 'Developer or studio name.' },
];

const orderModel: ModelField[] = [
  { name: 'id', type: 'string', description: 'Unique identifier for the order.' },
  { name: 'game_id', type: 'string', description: 'ID of the purchased game.' },
  { name: 'customer_id', type: 'string', description: 'ID of the customer.' },
  { name: 'quantity', type: 'integer', description: 'Number of copies ordered.' },
  { name: 'status', type: 'string', description: 'Current order status.' },
  { name: 'created_at', type: 'string', description: 'Order creation timestamp.' },
];

export const resourceDocs: ResourceDoc[] = [
  {
    key: 'games',
    title: 'Games',
    actions: buildCrudActions({
      key: 'games',
      title: 'Games',
      singular: 'game',
      model: gameModel,
      createPayload: {
        name: 'Puzzle Hero',
        genre: 'Puzzle',
        release_date: '2023-11-01',
        developer: 'Logic Labs',
      },
      updatePayload: {
        name: 'Puzzle Hero Remastered',
      },
      sampleEntity: {
        id: 'game_xyz123',
        name: 'Puzzle Hero',
        genre: 'Puzzle',
        release_date: '2023-11-01',
        developer: 'Logic Labs',
      },
    }),
  },
  {
    key: 'orders',
    title: 'Orders',
    actions: buildCrudActions({
      key: 'orders',
      title: 'Orders',
      singular: 'order',
      model: orderModel,
      createPayload: {
        game_id: 'game_xyz123',
        customer_id: 'customer_1001',
        quantity: 2,
      },
      updatePayload: {
        status: 'shipped',
      },
      sampleEntity: {
        id: 'order_xyz123',
        game_id: 'game_xyz123',
        customer_id: 'customer_1001',
        quantity: 2,
        status: 'placed',
        created_at: '2025-08-03T10:00:00Z',
      },
    }),
  },
];

export const getActionDoc = (resourceKey: string, actionSlug: string) => {
  const resource = resourceDocs.find((item) => item.key === resourceKey);

  if (!resource) {
    return null;
  }

  return resource.actions.find((action) => action.slug === actionSlug) ?? null;
};