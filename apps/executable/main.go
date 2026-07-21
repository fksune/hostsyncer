package main

import (
	"embed"
	"log"

	"github.com/gofiber/fiber/v3"
)

//go:embed web/index.html
var f embed.FS
var f_index, _ = f.ReadFile("web/index.html")

func main() {
	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		c.Set("Content-Type", "text/html")
		return c.SendString(string(f_index))
	})

	log.Fatal(app.Listen(":3000"))
}
