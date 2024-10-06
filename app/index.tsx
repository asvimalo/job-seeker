import { useState } from "react";
import { Text, ScrollView, SafeAreaView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={ {
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn  iconUrl={icons.menu} dimention='60%' handlePress={()=>{}}/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimention='100%' handlePress={()=>{}}/>
          ),
          headerTitle: ""}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
          <View 
            style={{
              flex:1,
              padding: SIZES.medium
            }}
          >
            <Welcome 
            
            />
            <Popularjobs/>
            <Nearbyjobs />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
