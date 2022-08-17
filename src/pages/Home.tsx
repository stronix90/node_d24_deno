import React from "https://deno.land/x/react_deno@17.0.2/react.ts";

type Props = {
    colors: string[];
};

export const Home = ({ colors }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Desafío 24 - Colores con Deno y React</title>
                <link rel="stylesheet" href="/home.css" />
            </head>

            <body>
                <div>
                    <form action="/" method="POST">
                        <input id="color" name="color" type="text" placeholder="Enter a color"/>
                        <button type="submit">Add color</button>
                    </form>

                    <ul>
                        {colors.map((color: string) => (
                            <li
                                style={{
                                    color: `${color}`,
                                }}
                            >
                                {color.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>
            </body>
        </html>
    );
};
