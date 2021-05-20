ToolTip.offsetX = 15; //�������� ��������� �� �������
ToolTip.offsetY = 15; //
function ToolTip(obj, text) {
  if(!obj||obj.nodeType!=1) throw "Illigal argument exception"; //������ � ���� ����������� ���������
  //-- �������� ��������� ---
  var tip=document.createElement("DIV");
  tip.className="tool_tip";
  tip.innerHTML=text;
  document.body.appendChild(tip);
  //-- ������� --
  // old = obj.onmouseout;
   obj.onmouseout=function (ev) {
   tip.style.visibility="hidden";
 //  old();
  };

  obj.onmousemove=function(ev) { //���� �� ����� ��� �� ���������� ������, �� onmouseover
      tip.style.visibility="visible";
      if(window.event) ev=window.event;

if(tip.offsetWidth+ev.clientX+10>document.body.clientWidth) //���� ��������� ������� �� �������
        ToolTip.offsetX=-tip.offsetWidth; //������, �� ������������ �
else
        ToolTip.offsetX=20;
if(tip.offsetHeight+ev.clientY+15>document.body.clientHeight)// ���� �����, �� �� ���������
       ToolTip.offsetY=-tip.offsetHeight;
else
      ToolTip.offsetY=10;

      tip.style.left=ev.clientX + document.body.scrollLeft + ToolTip.offsetX;
      tip.style.top=ev.clientY + document.body.scrollTop + ToolTip.offsetY;
  };
}
//��������� �������� ��������, ����� �������� ��� � ���� ���� �������� tooltip
//� ���������� �������� ����� ��������������� �����, * ��� ����
function initToolTips() {
//   return;
    var tags, tooltext;
    for(var i=0; i<arguments.length; i++) {
       tags=document.body.getElementsByTagName(arguments[i]);
       for(var j=0; j<tags.length; j++)
            if((tooltext=tags[j].getAttribute("help"))) ToolTip(tags[j], tooltext);
   }
}
