REMOVE NAMESPACE devns;
DEFINE TABLE OVERWRITE users TYPE ANY SCHEMALESS CHANGEFEED 1w
	PERMISSIONS NONE
;
DEFINE FIELD name ON users TYPE string
	PERMISSIONS FULL
;
DEFINE FIELD email ON users TYPE string ASSERT string::is::email($value)
	PERMISSIONS FULL
;
UPSERT users:john SET name="John", email = 'jogn@email.com';