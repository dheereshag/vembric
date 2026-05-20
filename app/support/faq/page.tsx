const faqs = [
  {
    q: "How do I get an API key?",
    a: "Sign up at vembric.io and navigate to Settings → API Keys. You can create multiple keys and label them per environment.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. The free plan includes 60 requests per minute and 5,000 requests per day. No credit card required.",
  },
  {
    q: "What format do timestamps use?",
    a: "All timestamps are ISO 8601 strings in UTC, e.g. 2026-05-20T10:00:00Z.",
  },
  {
    q: "How do I handle pagination?",
    a: "Use the next_cursor from each response as the cursor parameter on your next request. Stop when has_more is false.",
  },
  {
    q: "Can I test without affecting production data?",
    a: "Yes. Use test API keys (sk_test_) which operate in an isolated environment with no effect on live data.",
  },
  {
    q: "How long are webhook events retried?",
    a: "Failed webhook deliveries are retried up to 5 times with exponential backoff over approximately 24 hours.",
  },
  {
    q: "What happens when I exceed the rate limit?",
    a: "You receive a 429 Too Many Requests response. Read the Retry-After header to know when to resume.",
  },
  {
    q: "Which languages have official SDKs?",
    a: "Node.js, Python, PHP, Ruby, and Go. Community SDKs are welcome — see the GitHub organisation.",
  },
];

export default function FAQPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // support / faq
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">FAQ</h1>
        <p className="text-muted-foreground mt-2">
          Answers to the most common questions about the Vembric API.
        </p>
      </div>

      <div className="border-b mb-10" />

      <div className="space-y-0 border divide-y">
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="px-4 py-5">
            <p className="font-mono text-sm font-semibold mb-2">
              <span className="text-muted-foreground mr-2">Q.</span>{q}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed pl-5">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
