package main

import (
	"embed"
	"log"

	"github.com/gofiber/fiber/v3"
)

//go:embed web/favicon.png
var f embed.FS
var f_favicon, _ = f.ReadFile("web/favicon.png")

func main() {
	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		c.Set("Content-Type", "text/html")
		return c.SendString(string(`<head><link rel="icon" type="image/png" href="/favicon.png" /></head><b>hello</b>`))
	})

	app.Get("/favicon.png", func(c fiber.Ctx) error {
		c.Set("Content-Type", "image/png")
		return c.SendString(string(f_favicon))
	})

	log.Fatal(app.Listen(":3000"))
}
