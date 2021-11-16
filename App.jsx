import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider, Text, Box, FlatList, HStack, Divider } from 'native-base';

export default function App() {

  const transactions = [
    {
      title: "Pokawa",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 45.83,
        currency: "€",
        sign: "-"
      }
    },
    {
      title: "BeApp",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 1340.53,
        currency: "€",
        sign: "+"
      }
    },
    {
      title: "Intermarché",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 45.83,
        currency: "€",
        sign: "-"
      }
    },
    {
      title: "Paws",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 92.52,
        currency: "€",
        sign: "-"
      }
    },
    {
      title: "Pokawa",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 45.83,
        currency: "€",
        sign: "-"
      }
    },
    {
      title: "BeApp",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 1340.53,
        currency: "€",
        sign: "+"
      }
    },
    {
      title: "Intermarché",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 45.83,
        currency: "€",
        sign: "-"
      }
    },
    {
      title: "Paws",
      date: {
        day: "Oct 7",
        time: "6:13PM"
      },
      exchange: {
        value: 92.52,
        currency: "€",
        sign: "-"
      }
    }
  ]
  

  return (
    <NativeBaseProvider>
      <Box my="16">
        <Text fontSize="lg" textAlign="center">Total Balance</Text>
        <Text fontSize="5xl" textAlign="center">2 901,12€</Text>
      </Box>
      <Box mx="6" mb="6" borderColor="gray.300" borderWidth="1" borderRadius="lg">
        <FlatList data={transactions} renderItem={({item, index}) => {
          return (
            <>
              <HStack py="2" px="4" alignItems="center">
                <Box flex="1">
                  <Text fontSize="md" fontWeight="bold">{item.title}</Text>
                  <Text fontSize="sm" color="gray.600">{item.date.day} - {item.date.time}</Text>
                </Box>
                <Box>
                  <Text>{item.exchange.sign} {item.exchange.value.toString()} {item.exchange.currency}</Text>
                </Box>
              </HStack>
              { index !== transactions.length - 1 && <Divider />}
            </>
          )
        }} />
      </Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}