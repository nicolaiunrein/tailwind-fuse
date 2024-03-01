use super::*;

#[derive(Debug, Clone)]
pub struct TailwindTracking {
    kind: StandardValue,
}

impl Display for TailwindTracking {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "tracking-{}", self.kind)
    }
}

impl TailwindInstance for TailwindTracking {
    fn collision_id(&self) -> String {
        "text-tracking".into()
    }

    fn get_collisions(&self) -> Vec<String> {
        vec![self.collision_id()]
    }
}

impl TailwindTracking {
    /// <https://tailwindcss.com/docs/letter-spacing>
    pub fn parse(input: &[&str], arbitrary: &TailwindArbitrary) -> Result<Self> {
        let kind = StandardValue::parser("tracking", &|_| true)(input, arbitrary)?;
        Ok(Self { kind })
    }
    /// <https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing#syntax>
    pub fn check_valid(mode: &str) -> bool {
        let set = BTreeSet::from_iter(vec!["inherit", "initial", "normal", "unset"]);
        set.contains(mode)
    }
}