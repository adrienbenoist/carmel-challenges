const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist
  expect(carmel.original.route, "Missing original route").to.exist
  expect(carmel.original.route.components, "Missing original route components").to.exist
  expect(carmel.original.route.components.intro, "Missing original route components intro").to.exist
  expect(carmel.original.route.components.intro.text, "Missing original route components intro text").to.exist

  expect(state.route, `Missing the expected route`).to.exist
  expect(state.route.components, `Missing the expected route components`).to.exist
  expect(state.route.components.intro, `Missing the expected route components intro`).to.exist
  expect(state.route.components.intro.text, `Missing the expected route components intro text`).to.exist

  expect(carmel.original.route.components.intro.text, `Change the route cover components intro text to something other than "${state.route.components.intro.text}"`).to.not.equal(state.route.components.intro.text)
  
  done()
}