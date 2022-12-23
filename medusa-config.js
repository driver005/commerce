const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
    case 'production':
        ENV_FILE_NAME = '.env.production';
        break;
    case 'staging':
        ENV_FILE_NAME = '.env.staging';
        break;
    case 'test':
        ENV_FILE_NAME = '.env.test';
        break;
    case 'development':
    default:
        ENV_FILE_NAME = '.env';
        break;
}

try {
    dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {
}

// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001,http://localhost:9000";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://postgres:postgrespw@localhost:49153/postgres";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [

    // Uncomment to add Stripe support.
    // You can create a Stripe account via: https://stripe.com
    // {
    //   resolve: `medusa-payment-stripe`,
    //   options: {
    //     api_key: STRIPE_API_KEY,
    //     webhook_secret: STRIPE_WEBHOOK_SECRET,
    //   },
    // },
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    `medusa-plugin-economic`,
    `medusa-plugin-discount-generator`,
    `medusa-plugin-wishlist`,
    {
        resolve: `medusa-plugin-filestorage-local`,
        options: {
            fileLocation: "uploads/persistent/",
        }
    },
    {
        resolve: `medusa-plugin-jitsu`,
        options: {
            client: {
                key: "js.33605my39muchfpd9ekpj0.1cgrkt2hszvj7ljcacub5sv",
                tracking_host: "https://t.jitsu.com"
            }
        }
    },
    {
        resolve: `medusa-plugin-sentry`,
        options: {
            dsn: "https://0458156f524e40439b6141b6e04eed99@o612730.ingest.sentry.io/5748514",
            apiToken: "0458156f524e40439b6141b6e04eed99",
            integrations: (router, Sentry, Tracing) => {
                return [
                    new Sentry.Integrations.Http({ tracing: true }),
                    new Tracing.Integrations.Express({ router }),
                ];
            },
            tracesSampleRate: 1.0,
            webHookOptions: {
                path: "/sentry/webhook",
                secret: "9885b5e275954fcd9114ea306118b008",
                emitOnIssue: true,
                emitOnError: false,
                emitOnComment: true,
                emitOnEventOrMetricAlert: true,
                emitOnInstallOrDeleted: false,
            }
        },
    },
    {
        resolve: `medusa-plugin-prometheus`,
        options: {
            uriPath: "/monitoring",
            authentication: true,
            onAuthenticate: (req, username, password) => {
                return username === process.env.PROM_USER_NAME && password === process.env.PROM_USER_PASS
            },
        },
    },
    {
        resolve: `medusa-plugin-strapi`,
        options: {
            strapi_medusa_user: "Medusa Db",
            strapi_medusa_password: "Medusadb!1234",
            strapi_url: "localhost", //optional
            strapi_port: 1337, //optional
            strapi_protocol: "http" //optional
        }
    },
    {
        resolve: `medusa-plugin-meilisearch`,
        options: {
            // config object passed when creating an instance of the MeiliSearch client
            config: {
                host: "https://ms-d806836b7c10-1078.sfo.meilisearch.io",
                apiKey: "60a518b1dabdfb34154e13c096b22cc8b5cc9110",
            },
            settings: {
                // index name
                products: {
                    // MeiliSearch's setting options to be set on a particular index
                    searchableAttributes: ["title", "description", "variant_sku"],
                    displayedAttributes: ["title", "description", "variant_sku", "thumbnail", "handle"],
                },
            },
        },
    },
    {
        resolve: `medusa-plugin-nodemailer`,
        options: {
            transport: {
                service: 'gmail',
                secure: true,
                port: 465,
                auth: {
                    user: 'paulwolf2409@gmail.com',
                    pass: 'DERs58PZ'
                },
                tls: {
                    rejectUnauthorized: false
                }
            }
        }
    },
];

module.exports = {
    projectConfig: {
        redis_url: REDIS_URL,
        // For more production-like environment install PostgresQL
        database_url: DATABASE_URL,
        database_type: "postgres",
        // database_database: "./medusa-db.sql",
        // database_type: "sqlite",
        store_cors: STORE_CORS,
        admin_cors: ADMIN_CORS,
    },
    plugins,
};