# cleanup
rm -rf node_modules/.cache dist &&

# build
npx webpack --config ./config/webpack.config.js &&

# start server at port 5000
npx serve ./dist