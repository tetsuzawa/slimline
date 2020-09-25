package repository

import (
	"github.com/jmoiron/sqlx"
)

type SqlxExecer interface {
	sqlx.Ext
	sqlx.Preparer
	Get(dest interface{}, query string, args ...interface{}) error
	Select(dest interface{}, query string, args ...interface{}) error
}

// check if these structs satisfy SqlxExecer
var _ SqlxExecer = (*sqlx.DB)(nil)
var _ SqlxExecer = (*sqlx.Tx)(nil)
