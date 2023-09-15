# USAGE

## REQUEST

```sh
GET http://localhost:5000/graphql?query={books {name, id}}
```

## RESPONSE

```json
{
    "data": {
        "books": [
            {
                "name": "Harry Potter and the Chamber of Secrets",
                "id": 1
            },
            {
                "name": "Harry Potter and the Prisoner of Azkaban",
                "id": 2
            },
            {
                "name": "Harry Potter and the Goblet of Fire",
                "id": 3
            },
            {
                "name": "The Fellowship of the Ring",
                "id": 4
            },
            {
                "name": "The Two Towers",
                "id": 5
            },
            {
                "name": "The Return of the King",
                "id": 6
            },
            {
                "name": "The Way of Shadows",
                "id": 7
            },
            {
                "name": "Beyond the Shadows",
                "id": 8
            }
        ]
    }
}
```
