# USAGE

## REQUEST

```sh
GET http://localhost:4000
```

```graphql
query GameQuery {
    games() {
        id
        title
        platform
    }
}
```

## RESPONSE

```json
{
    "data": {
        "games": [
            { "id": "1", "title": "Zelda, Tears of the Kingdom", "platform": ["Switch"] },
            { "id": "2", "title": "Final Fantasy 7 Remake", "platform": ["PS5", "Xbox"] },
            { "id": "3", "title": "Elden Ring", "platform": ["PS5", "Xbox", "PC"] },
            { "id": "4", "title": "Mario Kart", "platform": ["Switch"] },
            { "id": "5", "title": "Pokemon Scarlet", "platform": ["PS5", "Xbox", "PC"] }
        ]
    }
}
```

## REQUEST-2

```graphql
query ReviewQuery($id: ID!) {
    review(id: $id) {
        rating
        content  
    }
}

```

## RESPONSE-2

```json
{
    "data": {
        "review": {
            "rating": 9,
            "content": "lorem ipsum"
        }
    }
}
```
