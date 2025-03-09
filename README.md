## Dockerize 

create docker file name as Dockerfile without any extention

create .dockerignore

```bash
## create docker image 
docker build -t image-name .

## create docker container from created image
docker run --name container-name image-name

## port forwarding to run on desktop

#This will create a new container
docker run -p Destination-PORT:Source-PORT image-name
#Destination port is host port and Source port is container port
docker run -p 3001:3000 image-name

#if want a docker container with specific name with port forwaring
docker run -d -p Host-PORT:Container-PORT --name Container-Name Image-Name
docker run -d -p 3001:3000 --name Container-Name Image-Name

# if want to show the running containers
docker ps

# if want the stop server
docker stop Container-Name

#if want again run server
docekr start Conatainer-Name


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


