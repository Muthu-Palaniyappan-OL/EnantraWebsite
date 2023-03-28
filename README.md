# Devolopment

For Installing dependencies
```sh
npm i
```

For dev

```sh
npm run start
```


# Release The Build Into Github

```sh
TRAILING_URL=".html" npm run build
npm run export
npm run serve
```

Note: Requires Python

# Vercel Deploy
npm run build
npm run start

# Things to note
- Don't change .gitignore
- Yes, i didn't put ./out folder in .gitignore because thats the folder which is gonna be used in github pages