
import type { CSSProperties } from 'react'

// eventually can do 'barrel' import from index.ts, but will just import from here for now
// tsconfig.app.json imports alias from here like this:
//     "paths": {
//         "@types": ["types/types.ts"],
// to use barrel, just use   "@types": ["types"],  => will auto look at index.ts

export interface CommonProps {
  className?: string
  style?: CSSProperties
}
