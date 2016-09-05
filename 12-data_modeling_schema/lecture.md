# Data Modeling & Schema

## Objectives
- Explain what an entity is.
- Describe three kinds of entity relationships.
- Identify an entity relationship diagram (ERD) is.
- Describe why an ERD is useful.
- Draw an ERD

### Explain what an entity is.
An entity is an object that has attributes. Represents a person, place, or thing. An attribute is a piece of information that describes an entity.
    - ask for examples of entities
        - html elements, people, shoes, songs,

### Describe three kinds of entity relationships.
relational model is an approach to managing information in a table structure (i.e. relation), where an entity is represented as a row and its attributes are represented as columns.
- one-to-one
    - one-to-one relationship describes the relationship between two entities where an entity from group A may only be linked to an entity of group B and vice versa.
- one-to-many
    - one-to-many relationship describes the relationship between two entities where an entity from group A may be linked to many entities from group B, but a entity from group B is linked to only one entity of group A
- many-to-many
    - many-to-many relationship describes the relationship between two entities where many entities of group A may be linked to many entities of group B and vice versa

### Identify an entity relationship diagram (ERD) is.
entity relationship diagram (ER diagram) is a drawing that represents people, places, or things that are inter-related. As the name suggests, an ER diagram is composed of entities and the relationships that can exist between them.

### Describe why an ERD is useful.
    - visually describe the relationships among tables and entities
    - understand how entities and their relationships exist over time
    - ER diagram is often created to represent the persistence needs of a new feature in a web application

### Draw an ERD
- one to one
    - constants, values
    - people, health records
    - spouses

- one to many
    - users, addresses
    - family relationships
    - ingredients, recipe, instructions

- many to many
    - users, likes
    - books, authors
    - authors, books, publishers

- artists, artworks, galleries, shows
- users, cohorts, daily plans, articles, standards, performance scores
- ingredients, recipes, meal plans, shopping lists
- inventory, customers, purchases, returns
- airlines, planes, flights, tickets, passengers
- apartment buildings, units, tenants, leases






