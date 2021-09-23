/*
 * MinIO Cloud Storage (C) 2018 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as actionsCommon from "./actions"

export default (
  state = {
    sidebarOpen: false,
    storageInfo: {used: 0},
    serverInfo: {}
  },
  action
) => {
  switch (action.type) {
    case actionsCommon.TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpen: !state.sidebarOpen
      })
    case actionsCommon.CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpen: false
      })
    case actionsCommon.SET_STORAGE_INFO:
      return Object.assign({}, state, {
        storageInfo: action.storageInfo
      })
    case actionsCommon.SET_SERVER_INFO:
      return { ...state, serverInfo: action.serverInfo }
    default:
      return state
  }
}
