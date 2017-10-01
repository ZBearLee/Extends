 class Widget {
            constructor(width, height) {
                this.width = width;
                this.height = height;
                this.$ele = null;
            }
            render($where) {
                if (this.$ele) {
                    this.$ele.style.width = this.width;
                    this.$ele.style.height = this.height;
                    $where.appendChild(this.$ele);
                }
            }
        }
        class Button extends Widget {
            constructor(width, height, label) {
                // super 调用父类的方法
                // 子类要实现父类的构造方法。
                super(width, height);
                this.label = label || 'Default';
                this.$ele = document.createElement('button');
                this.$ele.appendChild(
                    document.createTextNode(this.label)
                );
            }
            render($where) {
                super.render($where);
                let that = this;
                this.$ele.addEventListener('click',
                    this.onClick.bind(this)
                    , false);
            }
            onClick() {
                alert('this.label');
            }
        }
        let btn = new Button(100, 44, '确定');
        console.log(btn.width, btn.height);
        btn.render(document.body);
