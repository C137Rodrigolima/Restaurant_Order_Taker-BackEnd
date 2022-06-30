# Restaurant Order Taker

A order taker to a restaurante with page for the client and administrator!

Try it now [here](https://restaurant-order-taker.vercel.app)

## How to run:

1. Clone this project.
2. Create a `.env` archive on folder project and set whats below on it:

You'll need `postgresql`.
```
DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/restaurant_Order_Taker

JWT_SECRET= super_secret
```
3. Install dependencies
```
npm i
```
4. Run the database and seed with the command
```
npx prisma migrate dev
```
5. Run the api with
```
npm run dev
```
6. Go to FrontEnd Page [Right Here](https://github.com/C137Rodrigolima/Restaurant_Order_Taker), and clone it and follow the step by step to run it.

7. Try it by yourself...