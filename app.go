package main

import (
	"context"
	"encoding/json"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Response struct {
	Code int    `json:"code"`
	Name string `json:"name"`
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	res := &Response{
		Code: 200,
		Name: name,
	}
	content, _ := json.Marshal(res)
	return string(content)
}
