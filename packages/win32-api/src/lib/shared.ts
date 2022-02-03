import * as ref from 'ref-napi'
import * as _UnionDi from 'ref-union-di'


const UnionDi = _UnionDi

export const Union = UnionDi(ref as unknown as Parameters<typeof _UnionDi>[0])
