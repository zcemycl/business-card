# Business Card
This repo is to improve [zcemycl/practice-app](https://github.com/zcemycl/practice-app) with good practices learnt from [zcemycl/webpack-react-ts-mpa-example](https://github.com/zcemycl/webpack-react-ts-mpa-example) and others to develop more functional webpages.

## Relevant Repos
- Frontend
    - [zcemycl/business-card](https://github.com/zcemycl/business-card)
- Backend
    - Coming Soon?
- Infrastructure
    - Coming Soon?

## Coding Standards
- Frontend
    - React + Typescript
    - Javascript + Typescript
    - Jest
    - Cypress for e2e testing
    - Prettier - Code formatter
    - Testid?
    - Redux + Reducer
    - React-GA (User Activity Tracker?)
    - Test Dev Stage Prod
- Backend
    - Python 
        - Pytest
        - Packaging pylint isort black flake8
    - Nodejs
    - C++
    - C#
- Infrastructure
    - Terraform 
    - AWS

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