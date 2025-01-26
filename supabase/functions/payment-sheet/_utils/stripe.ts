// esm.sh is used to compile stripe-node to be compatible with ES modules.
import Stripe from "https://esm.sh/stripe@17.5.0?target=deno&deno-std=0.132.0&no-check";
import "https://deno.land/x/dotenv/load.ts";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
if (!stripeSecretKey) {
  throw new Error("Stripe API key is not set in the environment variables.");
}

export const stripe = Stripe(stripeSecretKey, {
  httpClient: Stripe.createFetchHttpClient(),
});
