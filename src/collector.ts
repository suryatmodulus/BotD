import { BotdError, Component, ComponentDict, Source, State } from './types'

/**
 * Collects all the components from the browser.
 *
 * @returns {Promise<ComponentDict>} A promise to the collected components.
 */
export default async function collect(sources: Record<string, Source>): Promise<ComponentDict> {
  const components: ComponentDict = {}
  for (const [i, v] of Object.values(sources).entries()) {
    let component: Component
    try {
      component = { state: State.Success, value: await v() }
    } catch (e) {
      if (e instanceof BotdError) component = { state: e.state, value: e.toString() }
      else component = { state: State.Unexpected, value: e.toString() }
    }
    components[`s${i + 1}`] = component
  }
  return components
}
