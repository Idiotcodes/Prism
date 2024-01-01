![logo.png](logo.png)
<img src="logo.png" alt="Logo" width="500" />

Watch your favourite anime anywhere, anytime. No Ads.

Previously called [**Zanime**](https://zanime.wtf), Prism is a free, open-source anime streaming website. It is built using the [Next Js](https://nextjs.org/) framework and [Tailwind CSS](https://tailwindcss.com/).

_Prism is still under development and may encounter many bugs. Feel free to open any issue regarding bugs or features_

## Features

- **No Ads** - No ads, no popups, no redirects, no bullshit.
- **PWA Support** - Kitsune is a PWA, which means you can install it on your phone.

## Contributing

```
fork the repo

git clone <forked-repo>
git checkout -b <new-feature>
git add <changed-file>
git commit -m "New feature"
git push origin <new-feature>

then submit a pull request
```

## Local Deployment

```
clone the repo
cd prism/
pnpm install
```

rename the `.env.example` file to `.env` then set in **Site Domain** ,**TMDB Read Access Key** and **vercel KV(optional)**.  
then run the app

```
pnpm build
pnpm start
```


## Credits

[Consumet](https://github.com/consumet/consumet.ts)
[Enime-Project](https://github.com/Enime-Project/api.enime.moe)
[anime-data](https://github.com/Dovakiin0/anime-data)

## Support

Join the Discord server: <https://discord.gg/Jymd23Db2J>
