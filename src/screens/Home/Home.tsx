import { SafeScreen } from "@/components/template";
import { ScrollView, Text } from "react-native";

function Home() {
  return (
    <SafeScreen>
      <ScrollView>
        <Text>Đây là 1 text</Text>
      </ScrollView>
    </SafeScreen>
  );
}

export default Home;
