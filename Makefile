install:
		npm ci
brain-games:
		node bin/brain-games.js
publish:
		npm publish --dry-run
lint:
		npx eslint .




#npm npx eslint .


# install:    npm ci
#
# brain-games: node bin/brain-games.js
#
# publish: npm publish --dry-run
#
# lint: npx eslint ..

# brain-games:
#     node bin/brain-games.js
# publish:
#     npm publish --dry-run
# lint:
#     npx eslint ..
