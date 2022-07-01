import app from "./app";

const port = process.env.PORT || 3030;

app.listen(port).on("listening", () => {
  console.log(`::: Server running`);
});
