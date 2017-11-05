# IS4301 Web Demo Project
Due to copyright issues, the text for news and images are not pushed to Github. The section "News" may not work.

### Run Project in Development Mode
1. Clone the project with git:

```bash
git clone https://github.com/vislx/is4301-demo.git
```

Alternatively, you may download the project as `.zip` file.

2. Go into project root directory:
```bash
cd is4301-demo
```
3. Go into project root directory, install Node.js modules with npm:
```bash
npm install
```
4. Run web in development mode with ng-cli:
```bash
ng serve
```

### Run Project in Production Mode
1. Make sure you have running web serve/container at hand (Node.js server is preffered).
2. Do step 1, 2 & 3 in previous setion.
3. Build the project with ng-cli:
```bash
ng build
```
4. The bundled project will be shown in `/dist` under project root directory. You may deploy the distributable web project to your web serve.