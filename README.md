# Volvo Cars (Global Online Digital)

## Assignment

Hi👋🏽! 
Thanks for reviewing my assignment😄 I had alot of fun actually working on it.

1. Install dependencies:

    ```bash
    cd god-frontend-code-test
    npm install
    ```

2. To run the project. You can view it on localhost:3000

    ```bash
    npm run dev
    ```

### Assumptions & limitations
1. I have assumed that the cars.json file is all the data I need and developed this solution around it
2. I used react-slick library for the slider effect, instead of building one from scratch
3. I have tried to use the new design system instead of vcc-ui, but where I didn't understand — I did custom CSS
4. I have never actually worked alot on accessibility, so I have to tried to add whatever I know
5. I have not used Next.js but again, i have tried to use it whereever I could e.g. routing.

### Folder structure
 ```bash
├───god-frontend-code-test 
    │
    ├───pages
    │   └───_app.tsx  
    │   └───home.tsx
    │
    ├───src
    │   ├───components
    │   │   └───carCard.tsx   
    │   │   └───chevronIcon.tsx
    │   │   └───filterBar.tsx
    │   ├───types
    │   │   └───car.ts
    │
    └───public
    │   ├───css
    │   │   └───styles.css 

```


###############################################


## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`

## Submission

Clone this repository to get started. Due to a number of reasons, not least privacy, you will be asked to zip your solution and mail it in, instead of submitting a pull-request. In order to maintain an unbiased reviewing process, please ensure to keep your name or other Personal Identifiable Information (PII) from the code.

