#!/bin/bash
## because there is a rate limit on public calls to the api
curl https://api.github.com/users/JosephMillsAtWork/repos > ghRepo.json
curl https://api.github.com/users/JosephMillsAtWork/gists > ghGists.json
curl https://api.github.com/users/JosephMillsAtWork > ghHome.json

