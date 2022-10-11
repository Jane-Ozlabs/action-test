// utils/agent.js

export function agentOptions({ agentLines, agent1, agent2, agent3 }) {
  var a1 = [], a2 = [], a3 = [];
  agentLines.filter(x => x).map(x => ({ id: x.id1, name: x.name1 })).forEach(x => !a1.find(e => e.id == x.id) && a1.push(x));
  agentLines.filter(x => (x.id1 == agent1 || !agent1) && x.id2).map(x => ({ id: x.id2, name: x.name2 })).forEach(x => !a2.find(e => e.id == x.id) && a2.push(x));
  agentLines.filter(x => (x.id1 == agent1 || !agent1) && (x.id2 == agent2 || !agent2) && x.id3).map(x => ({ id: x.id3, name: x.name3 })).forEach(x => !a3.find(e => e.id == x.id) && a3.push(x));
  console.log("agentOptions", UV(agentLines), agent1, agent2, agent3, a1, a2, a3);
  return { a1, a2, a3 };
}

export function agentLineText({ agentLines, agent1, agent2, agent3 }) {
  agent1 = Number(agent1); agent2 = Number(agent2); agent3 = Number(agent3);
  console.log("agentLineText", agentLines, agent1, agent2, agent3 );
  var t = "";
  var a1 = agentLines.find(x => agent1 && x.id1 == agent1)
  var a2 = agentLines.find(x => agent1 && agent2 && x.id1 == agent1 && x.id2 == agent2)
  var a3 = agentLines.find(x => agent3 && agent2 && agent1 && x.id1 == agent1 && x.id2 == agent2 && x.id3 == agent3)

  if(a1) t += a1.name1;
  if(a2) t += " > " + a2.name2;
  if(a3) t += " > " + a3.name3;
  return t;
}
