<template>
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-lcf4">ClientCode</th>
          <th class="tg-lcf4">SectionCode</th>
          <th class="tg-lcf4">VesselName</th>
          <th class="tg-lcf4">ServiceID</th>
          <th class="tg-lcf4">DEP PORT</th>
          <th class="tg-lcf4">ARR PORT</th>
          <th class="tg-lcf4">ATD</th>
          <th class="tg-lcf4">ATA</th>
          <th class="tg-lcf4">ServiceMenu</th>
          <th class="tg-0lax">Remark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in Service_Count" :key="a">
            <td class="tg-tqsg">{{Service_Count[i].clientcode._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].sectioncode._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].vessel_name._text}}</td>
            <td class="tg-tqsg"><a href="">{{Service_Count[i].ServiceID._text}}</a></td>
            <td class="tg-tqsg">{{Service_Count[i].dep_code._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].arr_code._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].dep_time._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].arr_time._text}}</td>
            <td class="tg-tqsg">{{Service_Count[i].service_menu._text}}</td>
            <td class="tg-hmp3"></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
// var parameters;
// var name;


//  parameters = this.$route.query
//  console.log(parameters)

//  name = this.$route.query.name
//  console.log(name)


export default {
  props : {
    Service_Count : Array,
  }

}
</script>

<style>

</style>