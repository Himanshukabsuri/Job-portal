// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://f32509c484ee0194615adf64dcc12df7@o4509882942816257.ingest.us.sentry.io/4509882951925760",
    integrations:[
        Sentry.mongooseIntegration(),
        
    ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

