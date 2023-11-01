import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@layout/Header";
import { Grid, Col, Row } from "react-native-easy-grid";

export function Mapa() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text>Mapa</Text>
      </View>
      <Grid>
        <Col>
          <View style={styles.basicos}></View>
        </Col>

        <Col>
          <Row>
            <View style={styles.corredor}>
              <Text>Mapa</Text>
            </View>
          </Row>
          <Row>
            <View style={styles.corredor}></View>
          </Row>
          <Row>
            <View style={styles.corredor}></View>
          </Row>
          <Row>
            <View style={styles.corredor}></View>
          </Row>
          <Row>
            <View style={styles.corredor}></View>
          </Row>

          <Row>
            <View style={styles.corredor}></View>
          </Row>
        </Col>

        <Col>
          <View></View>
        </Col>

        <Col>
          <View></View>
        </Col>

        <Col style={styles.caixa}>
          <View></View>
        </Col>

        <Col>
          <View></View>
        </Col>
      </Grid>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  basicos: {
    width: 35,
    height: 400,
    backgroundColor: "black",
  },
  corredor: {
    width: 240,
    height: 35,
    backgroundColor: "black",
    color: "white",
  },

  caixa: {
    marginRight: -20,
    width: 40,
    height: 400,
    backgroundColor: "black",
  },
};
