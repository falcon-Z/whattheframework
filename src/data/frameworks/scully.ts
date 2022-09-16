import { Angular } from "./angular";
import { Framework, WebsiteType, AppType } from "../types";

//subframework Angular

export const Scully: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [Angular],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Scully",
    docsLink: "https://scully.io/",
    githubOrg: "scullyio",
    githubRepo: "scully",
  },
};
