import React from "react"
import { Text, Box, FlatList, HStack, Divider } from 'native-base';
import transactions from "./data"

export default function HomeScreen() {
  return (
    <>
      <Box my="16">
        <Text fontSize="lg" textAlign="center">
          Total Balance
        </Text>
        <Text fontSize="5xl" textAlign="center" fontFamily="heading">
          2901,12€
        </Text>
      </Box>
      <Box
        mx="6"
        mb="6"
        borderColor="gray.300"
        borderWidth="1"
        borderRadius="lg"
      >
        <FlatList
          data={transactions}
          renderItem={({ item, index }) => {
            return (
              <>
                <HStack py="2" px="4" alignItems="center">
                  <Box flex="1">
                    <Text fontSize="md" fontWeight="bold">
                      {item.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {item.date.day} - {item.date.time}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      {item.exchange.sign} {item.exchange.value.toString()}{" "}
                      {item.exchange.currency}
                    </Text>
                  </Box>
                </HStack>
                {index !== transactions.length - 1 && <Divider />}
              </>
            );
          }}
        />
      </Box>
    </>
  );
}
