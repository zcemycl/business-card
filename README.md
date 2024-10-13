# Business Card

## Background

This series of repositories with prefix `business-card` should serve as my portfolio to demonstrate my skills and interesting ideas. It should extend the content of repositories like `zcemycl.github.io`, `practice-app` and `webpack-ts-mpa-example`, etc.

## Separation of concerns

- Frontend
  - business-card
  - business-card-private
  - business-card-prototype
  - business-card-react
  - business-card-next
  - business-card-{framework}
  - business-card-uiux-design
- Backend
  - business-card-backend
  - business-card-home-backend
- Infrastructure
  - business-card-infra
  - business-card-home-infra
- Database
  - business-card-core
  - business-card-etl
- Others
  - business-card-{npm-package}
  - business-card-{pypi-package}

## Coding Standards

- Frontend
  - React + Typescript
  - Javascript + Typescript
    - More customised designs
  - Jest
  - Cypress for e2e testing
  - Prettier - Code formatter
  - Testid?
  - Redux + Reducer
  - React-GA (User Activity Tracker?)
  - Test Dev Stage Prod
  - env-cmd?
  - Tour
  - Webpack
  - Bootstrap + MUI + Styled Components
  - Dynamic Page Recommendation?
- Backend
  - Python
    - Pytest
    - Packaging
    - pylint
    - isort
    - black
    - flake8
  - Nodejs
  - C++
  - C#
- Infrastructure
  - Terraform
    - AWS
      - amplify
      - rds, dynamodb
      - eks? ecr, ecs
    - Modules
    - Dev + Prod Folder to link modules
- Database
  - SQLite
    - Prototyping
  - MariaDB
    - User Pool
    - Page Rank
  - PostgreSQL
  - Neo4J
    - Fun
  - PySpark for recommendation system

## Architectures

```mermaid
flowchart LR
    subgraph a[github]
        subgraph a1[frontend]
            A1[business-card]
            A2[buc-example-page]
        end
        subgraph a2[infrastructure]
            A21[business-card-infrastructure]
        end
        subgraph a3[backend]
            A31[buc-example-api]
        end
        A2 --> A1
    end
    subgraph b[aws]
        subgraph b1[vpc]
            subgraph b11[storage]
                B111[rds]
                B112[s3]
            end
            subgraph b12[oauth]
                B121[cognito]
            end
            subgraph b13[backend]
                B131[ecs]
                B132[ecr]
                B133[kubernetes]
                B132-->B131
                B131-->B133
            end
        end

    end
    B121 --> a1
    a1 --> b11
    a1 --> b13
    click A1 "https://github.com/zcemycl/business-card" _blank

```
