# CLI grosh-cli

![boosty](https://static.boosty.to/assets/images/logo.86hCA.svg)
[Вы можете поддержать меня на Boosty](https://boosty.to/dima-grosh/donate)

`grosh-cli` это cli для быстрой генерации файлов в React приложении

## Usage

    grosh-cli generate <name of directory> <name of file>

### Subcommands

используйте `--style` чтобы указать расширения вашего css (по дефолиту используется scss) например:

    grosh-cli generate components header --style css

используйте `--language` чтобы указать расширения вашего ЯП (по дефолиту используется ts) например:

    grosh-cli generate components header --language js


## Installation

    npm install -g grosh

## Example
У нас есть базовая структура нашего react приложения, мы находимся в корне проекта.
```
📦react-project-name
┣ 📂src
┣ 📂node_modules
┣ 📜.gitignore
┣ 📜package-lock.json
┗ 📜package.json
```

Введем команду в терминале

```
grosh-cli generate components header
```

Результат будет следующий

```
📦react-project-name
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Header.tsx
 ┃   ┗ 📜Header.scss
 ┣ 📂node_modules
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

### Header.tsx

```tsx
import React from "react";

import "./Header.scss";

export const Header = () => (<></>);
```

### index.ts

```ts
export { Header } from "./Header";
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
