# Single Page Application with React


---

## Resources

### Development Environment Setup

```bash
# node 10 in docker:
docker run -it --rm -v $PWD:/home/node/app --network=host node:10 bash
```

### Scaffolding

Install create-react-app with either **yarn** or **npm**
```bash
# yarn:
yarn global add create-react-app
# npm:
npm install -g create-react-app
```

### Chrome PlugIn

* **React Developer Tools** https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi 

### React-Redux Tutorial

https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md

### Backend

Direct install using npm
```bash
# global install -- using deprecated package request
npm install json-server -g --unsafe-perm
# launch: with extra delay of 2000ms
json-server --watch db.json -p 3001 -d 2000 &
```

Or docker image
```bash
# make sure db.json and public/images/*.png are inside CWD:
ls -alh
# launch: internally bind to port 80 and externally expose at 3001
docker run -d -p 3001:80 -v $PWD:/data clue/json-server
```