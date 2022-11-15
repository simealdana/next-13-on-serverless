import Rollbar from 'rollbar'

export const config: Rollbar.Configuration = {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true,
      },
    },
    environment: process.env.NODE_ENV,
  },
}

export const rollbarInstance = new Rollbar(config)
