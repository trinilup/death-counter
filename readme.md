# Death Counter

[![Stars](https://img.shields.io/github/stars/trinilup/death-counter)](https://github.com/trinilup/death-counter/stargazers)
[![Forks](https://img.shields.io/github/forks/trinilup/death-counter)](https://github.com/trinilup/death-counter/network/members)
[![Issues](https://img.shields.io/github/issues/trinilup/death-counter)](https://github.com/trinilup/death-counter/issues)
[![Contributions](https://img.shields.io/github/contributors/trinilup/death-counter)](https://github.com/trinilup/death-counter/graphs/contributors)

Death counter es un contador de muertes personalizable para tu stream de Twitch. Puedes configurar el contador para que muestre la cantidad de muertes en tu stream, y también puedes configurar un comando para aumentar el contador.

## Previsualización

![Preview](/preview.png)

## Cómo usar

1. **Copia la URL base:** `https://trinilup.github.io/death-counter/`
2. **Añade parámetros a la URL:**

   | Parámetro  | Descripción                                                          | Valores permitidos                   |
   | ---------- | -------------------------------------------------------------------- | ------------------------------------ |
   | `channel`  | Nombre de tu canal de Twitch.                                        | Cualquier nombre de canal válido.    |
   | `image`    | URL de la imagen que se mostrará.                                    | Cualquier URL válida de imagen.      |
   | `onlyMods` | Define si solo los moderadores/streamer pueden aumentar el contador. | `true`, `false`                      |
   | `command`  | Comando para aumentar el contador.                                   | Cualquier palabra (e.g., `!muerte`). |
   | `cooldown` | Tiempo de espera en milisegundos para volver a usar el comando.      | Cualquier número entero.             |

3. **Ejemplo de URL personalizada:** `https://trinilup.github.io/death-counter/?channel=trinilup&onlyMods=true&command=rip`
4. **Añade la URL final a tu software de streaming.**
5. **¡Listo!** Tu contador de muertes se mostrará en tu stream.
6. PD: el comando '!muerte?' sera el comando predeterminado para aumentar el contador.

## Tecnologías utilizadas

- HTML
- JavaScript

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio o mejora.
