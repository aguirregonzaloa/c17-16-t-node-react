# Bienvenidos a SafePaws

## Documentation de NPM:

- [Documentación](https://docs.npmjs.com/)
- [Instalación](https://nodejs.org/en/download)

## Instalación de monorepo con npm workspaces

- Requerimento mínimo Node.js v15.+ and npm v7.+
- Hay una sola carpeta node_modules local en la raíz.
- Las instalaciones de los paquetes se hacen directo en la raíz --workspace (or -w) y el nombre del carpeta del proyecto.Ej.

instalación de paquetes:

```bash
  npm install express --save -w backend
```

Desinstalación de paquetes:

```bash
npm uninstall express --workspace backend
```

## Instalación del repo usando npm

```bash
  npm install
```

se puede ejecutar modo local Frontend:

```bash
  npm run front:dev
```

Luego, se puede ejecutar modo local Backend:

```bash
  npm run back:dev
```

Para levanter un servidor local en modo de desarrollo de la primera clase.

### Instalación del repo usando npm

Se debe ir a cada carpeta individual (ej. clases/clase01)

```bash
  cd apps/frontend
  npm install
  npm run dev
```

Para levanter un servidor local en modo de desarrollo.
