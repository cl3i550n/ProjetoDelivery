import React from "react";
import { LogBox } from "react-native";

import Navigation from './Navigation'

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);
export default props => <Navigation />
