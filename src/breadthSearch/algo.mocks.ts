import { Element } from "./algo.types";

export const easy1: Element[] = [{ value: true }];

export const easy2: Element[] = [{}, {}];

export const middle1: Element[] = [
    {},
    {
        connections: [
            {
                connections: [{ connections: [{ value: true }] }],
            },
        ],
    },
];

export const finalTest: Element[] = [
    {
        value: undefined,
        connections: [
            {},
            {
                value: undefined,
                connections: [
                    {},
                    {
                        value: undefined,
                        connections: [{}, {}, { value: true }, {}],
                    },
                    {},
                ],
            },
            {
                value: undefined,
                connections: [
                    {},
                    {
                        value: undefined,
                        connections: [
                            {},
                            {
                                value: undefined,
                                connections: [{ value: true }],
                            },
                            {},
                        ],
                    },
                    {},
                ],
            },
        ],
    },
];
