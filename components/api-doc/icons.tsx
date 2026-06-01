import {
  siCurl,
  siGo,
  siJavascript,
  siJson,
  siNodedotjs,
  siNpm,
  siPhp,
  siPnpm,
  siPypi,
  siPython,
  siRuby,
  siRubygems,
  siYarn,
} from "simple-icons";

export const Icon = ({ path }: { path: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d={path} />
  </svg>
);

export const CurlIcon = () => <Icon path={siCurl.path} />;
export const JavaScriptIcon = () => <Icon path={siJavascript.path} />;
export const JsonIcon = () => <Icon path={siJson.path} />;
export const NpmIcon = () => <Icon path={siNpm.path} />;
export const YarnIcon = () => <Icon path={siYarn.path} />;
export const PnpmIcon = () => <Icon path={siPnpm.path} />;
export const PythonIcon = () => <Icon path={siPython.path} />;
export const PypiIcon = () => <Icon path={siPypi.path} />;
export const RubygemsIcon = () => <Icon path={siRubygems.path} />;
export const RubyIcon = () => <Icon path={siRuby.path} />;
export const GoIcon = () => <Icon path={siGo.path} />;
export const NodejsIcon = () => <Icon path={siNodedotjs.path} />;
export const PhpIcon = () => <Icon path={siPhp.path} />;
