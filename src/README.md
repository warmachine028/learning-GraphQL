# USAGE

## REQUEST

```sh
GET http://localhost:4000
```

```graphql
query GameQuery {
    games {
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

## REQUEST-3

- Query

```graphql
mutation DeleteMutation($id: ID!) {
    deleteGame(id: $id){
        id
        title
        platform
    }
}
```

- Fields

```json
{ "id": "2" }
```



## RESPONSE-3

![response-3](https://github.com/warmachine028/learning-GraphQL/assets/75939390/2b9b1550-95db-4a27-9ce6-3a427345ac2b)

## REQUEST-4

- AddMutation

```graphql
mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game){
        id
        title
        platform
    }
}
```

- Fields

```json
{
    "game": {
        "title": "Mortuary Assistant",
        "platform": ["android", "pc", "ps5"]
    }
}
```

- GameQuery

```graphql
query GameQuery {
    games {
        id
        title
        platform
    }
}
```

## RESPONSE-4

- AddMutation
    ![response-4](https://github.com/warmachine028/learning-GraphQL/assets/75939390/c874c33e-d26b-4e4a-9051-493307ec09eb)

- GameQuery
    ![response-4](https://github.com/warmachine028/learning-GraphQL/assets/75939390/ccc69bb4-7876-456c-b334-0600a07b0bfd)
