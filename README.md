## Intall

1. npm i tailwind-merge
2. npm i supabase@">=1.8.1" --save-dev
3. npx supabase login
4. npx supabase gen types typescript --project-id rymaeztsrjnvhlxegcta --schema public > types_db.ts
5. npm i @supabase/auth-helpers-nextjs
6. npm i @supabase/auth-helpers-react
7. npm i stripe
8. npm i @radix-ui/react-dialog
9. npm i zustand
10.   npm i @supabase/auth-ui-react
11.   npm i @supabase/auth-ui-shared
12.   npm i react-hot-toast
13.   npm i react-hook-form
14.   npm i uniqid
15.   npm i @types/uniqid -D
16.   npm i query string
17.   npm i @radix-ui/react-slider
18.   npm i use-sound
19.   npm i react-spinenrs
20.   npm i @stripe/stripe-js

## Terminal

1. stripe login
2. stripe listen --forward-to localhost:3001/api/webhooks
3. stripe trigger payment_intent.succeeded
