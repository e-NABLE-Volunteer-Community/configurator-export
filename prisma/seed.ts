// import { ComponentCreateOrConnectWithoutDeviceInput } from '@generated/prisma-nestjs-graphql/component/component-create-or-connect-without-device.input';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
//
// const makeUnconfiguredPhoenixComponent = (
//   id: number,
//   partName: string,
//   count: number = 1,
// ): ComponentCreateOrConnectWithoutDeviceInput => ({
//   where: { id },
//   create: {
//     count,
//     location: {
//       type: 'Onshape',
//       documentId: '4e6716f856bd5bd0d01da59c',
//       workspaceId: 'e32b5f430e3c0c6a75c86af7',
//       partName,
//     },
//     exportLocation: `./${partName}`,
//   },
// });
//
// const makePinComponent = (
//   id: number,
//   letter: string,
//   count: number = 1,
// ): ComponentCreateOrConnectWithoutDeviceInput =>
//   makeUnconfiguredPhoenixComponent(id, `PIN-${letter}`, count);
//
// async function main() {
//   const phoenixV3 = await prisma.device.upsert({
//     where: {
//       id: 1000,
//     },
//     update: {},
//     create: {
//       id: 1000,
//       components: {
//         connectOrCreate: [
//           makePinComponent(1001, 'A', 4),
//           makePinComponent(1002, 'C'),
//           makePinComponent(1003, 'D'),
//           makePinComponent(1004, 'E'),
//           makePinComponent(1005, 'F', 2),
//           makeUnconfiguredPhoenixComponent(1006),
//           makeUnconfiguredPhoenixComponent(1007),
//           makeUnconfiguredPhoenixComponent(1008),
//           makeUnconfiguredPhoenixComponent(1009),
//         ],
//       },
//     },
//   });
// }
//
// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
export {};
