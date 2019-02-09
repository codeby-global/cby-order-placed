export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '909372626960-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
              complement: null,
              country: 'BRA',
            },
            price: 500,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '22',
                skuName: 'Sku serviço',
                name: 'Produto serviço Sku serviço',
                price: 1299,
                listPrice: 1500,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [
                  {
                    id: '2',
                    attachments: [],
                    name: '[TESTE QA]',
                    price: 500,
                    quantity: 1,
                    imageUrl: null,
                    measurementUnit: 'un',
                    unitMultiplier: 1,
                  },
                ],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
                detailUrl: '/produto-servico/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '13bd',
              deliveryWindow: null,
              price: 500,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '13bd',
            shippingEstimateDate: '2019-02-28T00:44:24.0194596Z',
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '22',
            skuName: 'Sku serviço',
            name: 'Produto serviço Sku serviço',
            price: 1299,
            listPrice: 1500,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [
              {
                id: '2',
                attachments: [],
                name: '[TESTE QA]',
                price: 500,
                quantity: 1,
                imageUrl: null,
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
            detailUrl: '/produto-servico/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        sellers: [
          {
            id: '1',
            name: 'vtexgame1',
          },
        ],
        totals: [
          {
            id: 'Items',
            name: 'Total dos Itens',
            value: 1799,
          },
          {
            id: 'Discounts',
            name: 'Total dos Descontos',
            value: 0,
          },
          {
            id: 'Shipping',
            name: 'Total do Frete',
            value: 500,
          },
          {
            id: 'Tax',
            name: 'Total da Taxa',
            value: 0,
          },
        ],
        clientProfileData: {
          email: 'victorhmp@mailinator.com',
          firstName: 'Victor',
          lastName: 'Hugo',
          document: '18430995005',
          documentType: 'cpf',
          phone: '+551112340909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: '5E7CC28DE89A4A4E945BBB1157DBE6ED',
              payments: [
                {
                  id: '88BB168D32D74E4DB6A68AFAEA03466E',
                  paymentSystem: '4',
                  paymentSystemName: 'Mastercard',
                  value: 2299,
                  installments: 1,
                  lastDigits: '1234',
                  group: 'creditCard',
                  dueDate: null,
                  url: null,
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceBarCodeNumber: null,
                  bankIssuedInvoiceIdentificationNumberFormatted: null,
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-02-09T00:43:54.2423736Z',
        value: 2299,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
          complement: null,
          country: 'BRA',
        },
        price: 500,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '22',
            skuName: 'Sku serviço',
            name: 'Produto serviço Sku serviço',
            price: 1299,
            listPrice: 1500,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [
              {
                id: '2',
                attachments: [],
                name: '[TESTE QA]',
                price: 500,
                quantity: 1,
                imageUrl: null,
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
            detailUrl: '/produto-servico/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '13bd',
          deliveryWindow: null,
          price: 500,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '13bd',
        shippingEstimateDate: '2019-02-28T00:44:24.0194596Z',
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
