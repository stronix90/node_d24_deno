import ReactDOM from "https://deno.land/x/react_deno@17.0.2/dom_server.ts";
import { createApp, serveStatic  } from "https://deno.land/x/servest@v1.3.4/mod.ts";
import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { Home } from "./pages/Home.tsx";

const app = createApp();
app.use(serveStatic("./public"));


let colors: string[] = ["blue", "yellow", "blue"];

app.post("/", async (req) => {
    const data = await req.formData();
    const color = data.value("color") as string;
    colors = [...colors, color];
    req.redirect("/");
});
app.get("/", async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({ "content-type": "text/html" }),
        body: ReactDOM.renderToString(<Home colors={colors} />),
    });
});

app.listen({ port: 8888 });
